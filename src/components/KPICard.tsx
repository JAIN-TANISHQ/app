import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPICard as KPICardType } from '../types';

export default function KPICard({ title, value, change, trend, timeframe }: KPICardType) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {getTrendIcon()}
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold">{value}</p>
        <p className="flex items-center mt-2 text-sm">
          <span className={`font-medium ${getTrendColor()}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className="ml-2 text-gray-500">vs {timeframe}</span>
        </p>
      </div>
    </div>
  );
}