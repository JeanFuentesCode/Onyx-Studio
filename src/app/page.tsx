"use client";

import { useState, useEffect, useRef } from "react";
import { Scan, Camera, X, Zap, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { generateProductSummary } from "@/ai/flows/generate-product-summary";
import { saveScan } from "@/lib/storage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const scannerRef = useRef<HTMLDivElement>(null);

  const simulateScan = async () => {
    setIsScanning(true);
    // In a real app, we'd use navigator.mediaDevices.getUserMedia and a library like jsQR
    // For this prompt, we simulate a scan after 1.5 seconds
    setTimeout(() => {
      handleScanDetected("8801043014816", "EAN-13");
      setIsScanning(false);
    }, 2000);
  };

  const handleScanDetected = async (data: string, type: string) => {
    setLoadingInfo(true);
    setResult({ data, type });
    
    try {
      // Mocked product details to feed into GenAI
      const mockProduct = {
        productName: "Premium Organic Coffee Beans",
        productDescription: "Hand-picked high-altitude Arabica beans from Ethiopia, roasted to perfection in small batches.",
        productFeatures: ["100% Organic", "Single Origin", "Lightly Roasted", "Notes of Citrus and Jasmine"]
      };

      const summary = await generateProductSummary(mockProduct);
      
      const newScan = {
        id: crypto.randomUUID(),
        data,
        type,
        timestamp: Date.now(),
        productInfo: {
          name: mockProduct.productName,
          summary: summary,
          price: "$24.99"
        }
      };
      
      saveScan(newScan);
      setResult(newScan);
    } catch (error) {
      console.error("Failed to get product info:", error);
    } finally {
      setLoadingInfo(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">ScanPro</h1>
        </div>
      </header>

      {/* Main Scanner View */}
      <div className="flex-1 px-6 flex flex-col">
        {!result ? (
          <div className="flex-1 flex flex-col gap-8 items-center justify-center">
            <div className="relative w-full aspect-square max-w-[320px]">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-accent rounded-tl-2xl z-10" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-accent rounded-tr-2xl z-10" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-accent rounded-bl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-accent rounded-br-2xl z-10" />
              
              <div className="w-full h-full bg-secondary/30 rounded-2xl flex items-center justify-center overflow-hidden relative group">
                {isScanning ? (
                  <>
                    <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent/50 shadow-[0_0_15px_rgba(82,187,247,0.8)] animate-[scanLine_2s_infinite_ease-in-out]" />
                    <Camera className="w-16 h-16 text-accent/20 animate-pulse" />
                  </>
                ) : (
                  <Camera className="w-16 h-16 text-muted-foreground group-hover:text-accent transition-colors" />
                )}
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-lg font-medium">Position code in the frame</p>
              <p className="text-sm text-muted-foreground">Supports QR codes, Barcodes, and more</p>
            </div>

            <Button 
              size="lg" 
              onClick={simulateScan}
              disabled={isScanning}
              className="w-full max-w-[280px] h-16 rounded-2xl text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
              {isScanning ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Scan className="mr-2 h-5 w-5" />
              )}
              {isScanning ? "Searching..." : "Start Scanning"}
            </Button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Scan Result</h2>
              <Button variant="ghost" size="icon" onClick={() => setResult(null)}>
                <X className="w-6 h-6" />
              </Button>
            </div>

            <Card className="border-none shadow-2xl bg-card overflow-hidden rounded-3xl mb-6">
              <div className="bg-primary/20 p-8 flex justify-center">
                <div className="w-32 h-32 rounded-2xl bg-white p-4 flex items-center justify-center">
                  {/* Visual representation of a barcode/QR */}
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`w-4 h-4 rounded-sm ${i % 3 === 0 ? 'bg-primary' : 'bg-muted'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Type: {result.type || 'UPC-A'}</p>
                    <h3 className="text-2xl font-bold tracking-tight">{result.productInfo?.name || "Processing..."}</h3>
                  </div>
                  {result.productInfo?.price && (
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1 bg-accent/10 text-accent border-none">
                      {result.productInfo.price}
                    </Badge>
                  )}
                </div>

                <div className="bg-background/50 rounded-2xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase">AI Summary</span>
                  </div>
                  {loadingInfo ? (
                    <div className="flex items-center gap-2 py-2">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" />
                      <span className="text-sm text-muted-foreground italic">Fetching product details...</span>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {result.productInfo?.summary || "No information found for this item."}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-xl h-12" onClick={() => setResult(null)}>New Scan</Button>
                  <Button className="flex-1 rounded-xl h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold">View Detail</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <BottomNav />

      <style jsx global>{`
        @keyframes scanLine {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  );
}