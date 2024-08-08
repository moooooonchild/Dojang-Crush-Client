import { TitleComponent } from '../components/common/header/TitleComponent';
import { Calendar } from '../components/calendar/Calendar';
import { useEffect, useState } from 'react';
import { getDatePosts, getMonthlyPosts } from '../api/post';
import Modal from 'react-modal';
import { ModalContent } from '../components/calendar/ModalContent';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '10px',
        width: '20rem',
        height: '20rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const CalendarPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('2000-02-14');

    const [datePost, setDatePost] = useState([]);

    useEffect(() => {
        getDatePosts(date).then((res) => {
            if (res && res.postList) {
                setDatePost(res.postList);
            }
        });
    }, [date]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setDatePost([]);
    };

    return (
        <>
            <TitleComponent title="Calendar" />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ModalContent posts={datePost} />
            </Modal>
            <Calendar setIsOpen={setIsOpen} setDate={setDate} />
        </>
    );
};

export default CalendarPage;
