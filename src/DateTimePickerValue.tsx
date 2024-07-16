import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Typography from "@mui/material/Typography";
import "dayjs/locale/ko";

export default function DateTimePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(
    // case: 2024-07-15T23:51
    dayjs("2024-07-09T00:10")
  );
  const [value2, setValue2] = React.useState<Dayjs | null>(
    // case: 2024-07-15T23:51
    dayjs("2024-07-16T00:10")
  );

  const localeText = {
    okButtonLabel: "확인",
    cancelButtonLabel: "취소",
    clearButtonLabel: "초기화",
  };

  const CustomCalendarHeader = React.memo(({ currentMonth, onMonthChange }) => {
    const formattedDate = currentMonth ? currentMonth.format("YYYY년 M월") : "";

    const handlePrevMonth = React.useCallback(() => {
      onMonthChange(currentMonth.subtract(1, "month"));
    }, [currentMonth, onMonthChange]);

    const handleNextMonth = React.useCallback(() => {
      onMonthChange(currentMonth.add(1, "month"));
    }, [currentMonth, onMonthChange]);

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <IconButton onClick={handlePrevMonth} edge="start">
          <ArrowLeftIcon />
        </IconButton>
        <Typography variant="h7" style={{ margin: "0 10px" }}>
          {formattedDate}
        </Typography>
        <IconButton onClick={handleNextMonth} edge="end">
          <ArrowRightIcon />
        </IconButton>
      </div>
    );
  });

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ko"
      localeText={localeText}
    >
      <DateTimePicker
        value={value}
        ampm={false}
        format={"YYYY-MM-DD HH:mm"}
        timeSteps={{ hours: 1, minutes: 10 }}
        minDateTime={dayjs("2022-07-09T00:10")}
        maxDateTime={dayjs("2024-07-09T00:10")}
        onChange={(newValue) => setValue(newValue)}
        slots={{
          calendarHeader: CustomCalendarHeader,
        }}
        slotProps={{
          calendarHeader: {
            currentMonth: value,
            onMonthChange: setValue,
          },
        }}
      />
      ~
      <DateTimePicker
        value={value2}
        ampm={false}
        format={"YYYY-MM-DD HH:mm"}
        timeSteps={{ hours: 1, minutes: 10 }}
        minDateTime={dayjs("2022-07-16T00:10")}
        maxDateTime={dayjs("2024-07-16T00:10")}
        onChange={(newValue) => setValue2(newValue)}
        slots={{
          calendarHeader: CustomCalendarHeader,
        }}
        slotProps={{
          calendarHeader: {
            currentMonth: value2,
            onMonthChange: setValue2,
          },
        }}
      />
    </LocalizationProvider>
  );
}
