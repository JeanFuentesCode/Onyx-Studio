"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Trash2, Calendar, ChevronRight, FileDown, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";
import { getScanHistory, deleteScan, ScanItem, clearHistory } from "@/lib/storage";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function HistoryPage() {
  const [history, setHistory] = useState<ScanItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setHistory(getScanHistory());
  }, []);

  const handleDelete = (id: string) => {
    deleteScan(id);
    setHistory(getScanHistory());
  };

  const handleClear = () => {
    if (confirm("Clear all history?")) {
      clearHistory();
      setHistory([]);
    }
  };

  const filteredHistory = history.filter((item) => 
    item.data.toLowerCase().includes(search.toLowerCase()) ||
    item.productInfo?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="p-6 sticky top-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Scan History</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={handleClear}>
              <Trash2 className="w-5 h-5 text-muted-foreground" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="gap-2">
                  <FileDown className="w-4 h-4" /> Export CSV
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Filter className="w-4 h-4" /> Filter by Date
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            className="pl-11 h-12 bg-secondary/50 border-none rounded-2xl text-base focus-visible:ring-accent" 
            placeholder="Search scans or products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* List */}
      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        {filteredHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-center space-y-4 opacity-50">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <Search className="w-10 h-10" />
            </div>
            <p className="text-lg font-medium">No scans found</p>
            <p className="text-sm">Start scanning items to see them here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div 
                key={item.id} 
                className="group p-4 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all android-ripple"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base truncate">{item.productInfo?.name || item.data}</h3>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                        {format(item.timestamp, 'HH:mm')}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mb-2">{item.type} • {item.data}</p>
                    <div className="flex items-center gap-1 text-[10px] text-accent font-bold uppercase tracking-tighter">
                      {format(item.timestamp, 'MMM d, yyyy')}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}