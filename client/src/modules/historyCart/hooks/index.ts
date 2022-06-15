import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { layoutHistoryInterface } from '../interfaces';
import { subDays } from 'date-fns';

export const useHistoryCartArray = () => {
    const userDataCart = useSelector(({ userData }: RootState) => userData.user.cart);
    const lastOrderDay = userDataCart[userDataCart?.length - 1];
    const [startDate, setStartDate] = useState<Date>(moment(lastOrderDay?.date).toDate());
    const today = moment().toDate();
    const subDate = userDataCart.map((element: layoutHistoryInterface) =>
        subDays(new Date(element?.date), 0),
    );
    const [filteredDate, setFilteredDate] = useState<layoutHistoryInterface[]>([]);

    useEffect(() => {
        const filterCart = userDataCart?.filter(
            (elem: layoutHistoryInterface) =>
                moment(elem.date).format('L') === moment(startDate).format('L'),
        );
        setFilteredDate(filterCart);
    }, [startDate, userDataCart]);

    return { today, startDate, setStartDate, filteredDate, subDate };
};
