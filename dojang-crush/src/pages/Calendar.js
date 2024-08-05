import { TitleComponent } from '../components/common/header/TitleComponent';
import { Calendar } from '../components/calendar/Calendar';

const CalendarPage = () => {
    return (
        <>
            <TitleComponent title="Calendar" />
            <Calendar />
        </>
    );
};

export default CalendarPage;
