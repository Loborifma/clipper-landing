import { users, subscriptions, type User, type InsertUser, type Subscription, type InsertSubscription } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscription methods
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getAllSubscriptions(): Promise<Subscription[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Subscription methods
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    const [subscription] = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
    return subscription;
  }
  
  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    try {
      const [newSubscription] = await db.insert(subscriptions).values(subscription).returning();
      return newSubscription;
    } catch (error) {
      // Handle unique constraint violation
      if (error.message?.includes('unique constraint')) {
        // Email already exists, return existing subscription
        const [existingSubscription] = await db.select().from(subscriptions).where(eq(subscriptions.email, subscription.email));
        return existingSubscription;
      }
      throw error;
    }
  }
  
  async getAllSubscriptions(): Promise<Subscription[]> {
    return db.select().from(subscriptions);
  }
}

// Memory storage as fallback if needed
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscriptions: Map<string, Subscription>;
  currentUserId: number;
  currentSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.subscriptions = new Map();
    this.currentUserId = 1;
    this.currentSubscriptionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return this.subscriptions.get(email);
  }
  
  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    const id = this.currentSubscriptionId++;
    const createdAt = new Date();
    const newSubscription: Subscription = { 
      id, 
      email: subscription.email, 
      source: subscription.source || "landing_page",
      createdAt
    };
    
    this.subscriptions.set(subscription.email, newSubscription);
    return newSubscription;
  }
  
  async getAllSubscriptions(): Promise<Subscription[]> {
    return Array.from(this.subscriptions.values());
  }
}

// Use database storage
export const storage = new DatabaseStorage();
