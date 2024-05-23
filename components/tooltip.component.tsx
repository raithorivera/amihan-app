'use client';

import React from 'react';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@ui';

interface TooltipComponentProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export const TooltipComponent: React.FC<TooltipComponentProps> = ({ children, content }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side='right'>{content}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
