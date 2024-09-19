"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-gray-200",
        nav: "space-x-1 flex items-center text-gray-200",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 "
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-black/50 [&:has([aria-selected])]:bg-black first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-black text-white"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-white text-black hover:bg-gray-200 hover:text-black focus:bg-gray-200 focus:text-black",
        day_today: "bg-gray-800 text-white",
        day_outside:
          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-800/50 aria-selected:text-gray-500 aria-selected:opacity-30",
        day_disabled: "text-gray-500 opacity-50",
        day_range_middle: "aria-selected:bg-gray-800 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <IconArrowNarrowLeft className="h-4 w-4" />,
        IconRight: () => <IconArrowNarrowRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
