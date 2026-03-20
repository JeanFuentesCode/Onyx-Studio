"use client";

import { Download, FileText, Share2, Shield, Info, Trash2, Zap, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { getScanHistory } from "@/lib/storage";

export default function SettingsPage() {
  const exportAsCSV = () => {
    const history = getScanHistory();
    if (history.length === 0) return alert("Nothing to export.");
    
    const headers = ["ID", "Data", "Type", "Product Name", "Price", "Timestamp"];
    const rows = history.map(item => [
      item.id,
      item.data,
      item.type,
      item.productInfo?.name || "",
      item.productInfo?.price || "",
      new Date(item.timestamp).toISOString()
    ]);
    
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `scanpro_export_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="p-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </header>

      <div className="flex-1 px-6 space-y-8 pb-24">
        {/* Account Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">Account & Pro</h2>
          <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ScanPro Gold</h3>
                <p className="text-sm text-muted-foreground">Unlimited scans & AI</p>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-xl">Upgrade</Button>
          </div>
        </section>

        {/* Export Section */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">Data Management</h2>
          <div className="bg-card rounded-3xl overflow-hidden border border-border/50">
            <button 
              onClick={exportAsCSV}
              className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors android-ripple"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Export History (CSV)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="h-px bg-border mx-4" />
            <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors android-ripple">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Export Text Logs</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </section>

        {/* General Settings */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">General</h2>
          <div className="bg-card rounded-3xl overflow-hidden border border-border/50">
            <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors android-ripple">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium">App Settings</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="h-px bg-border mx-4" />
            <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors android-ripple">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium">Privacy & Security</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="h-px bg-border mx-4" />
            <button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors android-ripple">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Info className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium">About ScanPro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">v1.2.4</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </button>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Proudly built for Android & Web</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}