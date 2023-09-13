import {useAppDispatch} from "../store/store";
import * as userActions from '../store/auth/actions'
import {useMemo} from "react";
import {bindActionCreators} from "redux";
export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(
        {...userActions}, dispatch), [dispatch]
    )
}