import { format, formatDistanceToNow } from "date-fns";

function formatPublishedDate(date: Date) {
  const publishedDateFormatted = format(date, "d 'of' LLLL 'at' HH:mm'h'");
  return publishedDateFormatted;
}

function formatPublishedDateRelativeToNow(date: Date) {
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    addSuffix: true,
  });
  return publishedDateRelativeToNow;
}

function generateRandomDate() {
  const maxDaysInPast = 30;
  const currentDate = new Date();

  const randomMillisecondsInPast = Math.floor(
    Math.random() * maxDaysInPast * 24 * 60 * 60 * 1000
  );

  return new Date(currentDate.getTime() - randomMillisecondsInPast);
}

function generateRandomDateFromDate(baseDate: Date): Date {
  const currentDate = new Date();
  const baseTime = baseDate.getTime();

  const currentTime = currentDate.getTime();
  const randomTime = baseTime + Math.random() * (currentTime - baseTime);

  return new Date(randomTime);
}

export const dateUtils = {
  generateRandomDate,
  formatPublishedDate,
  generateRandomDateFromDate,
  formatPublishedDateRelativeToNow,
};
