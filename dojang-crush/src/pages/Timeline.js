import NavigationBar from "../components/NavigationBar";
import { CalendarIcon } from "../components/calendar/CalendarIcon";
import { TitleComponent } from "../components/common/Title/TitleComponent";

const TimelinePage = () => {
  return (
    <>
      <TitleComponent
        title='timeline'
        isBackBtn={false}
        RightIcon={() => <CalendarIcon />}
        RightIconPath={"/calendar"}
      />
      <NavigationBar />
    </>
  );
};

export default TimelinePage;
