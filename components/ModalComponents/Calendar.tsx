import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Button, Text } from "@ui-kitten/components";
import { commonColors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const CalendarComponent = ({ delivery_date, initial_delivery_date }: any) => {
  const router = useRouter();
  const [markedDates, setMarkedDates] = useState({});
  const [localDelivery, setLocalDelivery] = useState(
    delivery_date ? new Date(delivery_date) : ""
  );
  const [localInitial, setLocalInitial] = useState(
    initial_delivery_date ? new Date(initial_delivery_date) : ""
  );
  const formatDates = (dateToFormat: any) =>
    moment.utc(dateToFormat).format("YYYY-MM-DD");

  const markedStyles = {
    selected: true,
    customStyles: {
      container: {
        backgroundColor: commonColors.secondary,
        borderRadius: 2,
      },
      text: {
        fontWeight: "500",
      },
    },
  };
  const secondaryMarkedStyles = {
    selected: true,
    customStyles: {
      container: {
        backgroundColor: `${commonColors.secondary}75`,
        borderRadius: 0,
        height: 30,
        marginTop: 1,
      },
      text: {
        fontWeight: "500",
      },
    },
  };

  useEffect(() => {
    let deliveryDateType;
    let initialDate;
    if (localDelivery) {
      deliveryDateType = moment.utc(localDelivery);
      const formatDeliveryDate = formatDates(localDelivery);
      setMarkedDates((prev) => ({
        ...prev,
        [formatDeliveryDate]: markedStyles,
      }));
    }
    if (localInitial) {
      initialDate = moment.utc(localInitial);
      const formatDeliveryDate = formatDates(localInitial);
      setMarkedDates((prev) => ({
        ...prev,
        [formatDeliveryDate]: markedStyles,
      }));
    }
    if (deliveryDateType && initialDate) {
      let differenceBetweenDates = deliveryDateType.diff(initialDate, "day");
      const auxObj: any = {};
      for (let i = 1; i < differenceBetweenDates; i++) {
        initialDate.add(1, "day");
        auxObj[initialDate.format("YYYY-MM-DD")] = secondaryMarkedStyles;
      }
      setMarkedDates((prev) => ({
        ...prev,
        ...auxObj,
      }));
    }
  }, [localDelivery, localInitial]);

  const onDayPress = (event: any) => {
    const auxDateTime = new Date(event.timestamp);
    if (localInitial && localDelivery) {
      setMarkedDates([]);
      setLocalDelivery(new Date(auxDateTime));
      setLocalInitial("");
    }
    if (localDelivery && !localInitial) {
      if (localDelivery > new Date(auxDateTime)) {
        setLocalInitial(new Date(auxDateTime));
      } else {
        setLocalInitial(localDelivery);
        setLocalDelivery(new Date(auxDateTime));
      }
    }
  };

  const setSpecificDate = (days: number) => () => {
    const currentDate = new Date();
    const targetDate = moment
      .utc(currentDate)
      .add({
        days,
      })
      .format("YYYY-MM-DD");
    setMarkedDates([]);
    setLocalDelivery(new Date(targetDate));
    setLocalInitial("");
  };

  const cancel = () => {
    router.back();
  };
  const save = () => {
    router.back();
  };

  return (
    <ThemedView
      style={[
        {
          height: "auto",
          width: "100%",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flex: 1,
          padding: 24,
        },
      ]}
    >
      <ThemedText
        style={[
          {
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 16,
          },
        ]}
      >
        Fecha de entrega
      </ThemedText>

      <SafeAreaView
        style={{
          width: "100%",
          marginTop: -42,
          position: "relative",
          height: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Button
            size="small"
            onPress={setSpecificDate(1)}
            style={{ maxWidth: 100 }}
          >
            Un día
          </Button>
          <Button
            size="small"
            onPress={setSpecificDate(2)}
            style={{ maxWidth: 160 }}
          >
            En dos días
          </Button>
          <Button
            size="small"
            onPress={setSpecificDate(7)}
            style={{ maxWidth: 100 }}
          >
            1 semana
          </Button>
        </View>

        <Calendar
          markingType="custom"
          markedDates={markedDates}
          initialDate={moment(new Date()).format("YYYY-MM-DD")}
          onDayPress={onDayPress}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Button
            size="medium"
            onPress={cancel}
            appearance="outline"
            status="info"
            style={{ width: "100%" }}
          >
            Cancelar
          </Button>
          <Button size="medium" style={{ width: "100%" }} onPress={save}>
            Guardar
          </Button>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};

export default CalendarComponent;
