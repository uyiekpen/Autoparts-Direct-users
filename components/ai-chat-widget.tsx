"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Autopart AI, your 24/7 auto parts assistant. How can I help you today?",
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages([...messages, { role: "user", content: message }])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I can help you with part searches, vendor information, pricing, and platform guidance. What would you like to know?",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent p-0 shadow-lg hover:bg-accent/90 md:h-16 md:w-16"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-accent-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-accent-foreground" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col border-border bg-card shadow-2xl md:w-[400px]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-accent p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground/10">
              <Sparkles className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-accent-foreground">Autopart AI</h3>
              <p className="text-xs text-accent-foreground/80">Your 24/7 assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-card-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about parts, vendors, pricing..."
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button onClick={handleSend} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Ask about parts, vendor onboarding, pricing, and more</p>
          </div>
        </Card>
      )}
    </>
  )
}
