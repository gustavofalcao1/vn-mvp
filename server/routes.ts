import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface NewsletterSubscription {
  email: string;
  name: string;
  consent: boolean;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email, name, consent } = req.body as NewsletterSubscription;
      
      // Basic validation
      if (!email || !name || consent !== true) {
        return res.status(400).json({ 
          success: false, 
          message: "All fields are required and consent must be provided" 
        });
      }
      
      // In a real app, you might want to store this in a database
      // For now, we'll just log it and return success
      console.log("Newsletter subscription:", { email, name, consent });
      
      return res.status(200).json({ 
        success: true, 
        message: "Newsletter subscription successful" 
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your subscription" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
