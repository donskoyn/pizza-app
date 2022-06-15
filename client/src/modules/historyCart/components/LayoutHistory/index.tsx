import React from 'react';
import { useHistoryCartArray } from '../../hooks';
import HistoryOptions from '../HistoryOptions';
import styles from './LayoutHistory.module.scss';
import DatePicker from 'react-datepicker';
import { layoutHistoryInterface } from '../../interfaces';

const LayoutHistory: React.FC = (): JSX.Element => {
    const { filteredDate, startDate, today, setStartDate, subDate } = useHistoryCartArray();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>History Orders</h1>

            <div className={styles.content}>
                <div className={styles.datePickerWrapper}>
                    <DatePicker
                        inline
                        showMonthDropdown
                        highlightDates={subDate}
                        selectsStart
                        maxDate={today}
                        selected={startDate}
                        onChange={(date) => date && setStartDate(date)}
                    />
                </div>
                <div className={styles.card}>
                    {filteredDate.length > 0 ? (
                        filteredDate.map((cartElement: layoutHistoryInterface) => {
                            return <HistoryOptions key={cartElement.date} data={cartElement} />;
                        })
                    ) : (
                        <div className={styles.emptyHistory}>You history is empty</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LayoutHistory;
