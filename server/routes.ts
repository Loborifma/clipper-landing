import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { subscribeSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = subscribeSchema.parse(req.body);
      const subscription = await storage.createSubscription(validatedData);
      res.status(201).json({
        message: "Subscription successful",
        subscription
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error during subscription:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
