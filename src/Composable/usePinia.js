import { useSystemStore } from "@/stores/system";

export default function () {
  const system = useSystemStore();
  const callAction = async (action, data) => {
    system.activeLoading();
    const result = await action(data);
    system.disActiveLoading();
    return result;
  };
  const callActionWithBtnLoading = async (action, data) => {
    system.activeButtonLoading();
    const result = await action(data);
    system.disActiveButtonLoading();
    return result;
  };
  return {
    callAction,
    callActionWithBtnLoading,
  };
}
