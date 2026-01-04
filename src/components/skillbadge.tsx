
import React from "react";

interface SkillBadgeProps {
  name: string;
  level: number; // 1 a 5
  category: string;
  icon: React.FC<any>;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  level, 
  category, 
  icon: Icon 
}) => {
  return (
    <div className="group relative flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-200">
      {/* Icon container */}
      <div className="flex items-center justify-center w-9 h-9 rounded-md bg-muted">
        <Icon className="w-5 h-5 text-foreground" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-foreground truncate">
            {name}
          </span>
          <span className="text-xs text-muted-foreground shrink-0">
            {category}
          </span>
        </div>
        
        {/* Level indicator */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1 w-5 rounded-full transition-colors ${
                i <= level 
                  ? "bg-primary" 
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};