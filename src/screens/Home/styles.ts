import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    flex: 1,
    padding: 24,
  },

  eventName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "lightgray",
    fontSize: 16,
  },

  input: {
    height: 56,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },

  buttonText: {
    color: "#F2F2F2",
    fontSize: 24,
  },

  button: {
    height: 56,
    width: 56,
    borderRadius: 10,
    backgroundColor: "#0f6a08",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 25,
    marginBottom: 42,
  },

  listEmptyText: {
    fontSize: 16,
    color: "#F2F2F2",
  },
});
