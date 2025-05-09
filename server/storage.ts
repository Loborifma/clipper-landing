import { subscriptions, type Subscription, type InsertSubscription } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Subscription methods
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getAllSubscriptions(): Promise<Subscription[]>;
}

export class DatabaseStorage implements IStorage {
  // Subscription methods
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    const [subscription] = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
    return subscription;
  }
  
  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    try {
      const [newSubscription] = await db.insert(subscriptions).values(subscription).returning();
      return newSubscription;
    } catch (err) {
      const error = err as Error;
      // Handle unique constraint violation
      if (error.message && error.message.includes('unique constraint')) {
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
  private subscriptions: Map<string, Subscription>;
  currentSubscriptionId: number;

  constructor() {
    this.subscriptions = new Map();
    this.currentSubscriptionId = 1;
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
