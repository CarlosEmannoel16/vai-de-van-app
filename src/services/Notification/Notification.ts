import * as Notifications from "expo-notifications";

export const sendNotification = async () => {
  const { status } = await Notifications.getPermissionsAsync();

  await Notifications.requestPermissionsAsync();

  console.log(status);
  if (status !== "granted") {
    return;
  }

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: "My first local notification",
      body: "This is the body of the first local notification",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
  console.log(identifier);
};
