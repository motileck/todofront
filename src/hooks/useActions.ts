import {useAppDispatch} from "../store/store";
import * as userActions from '../store/auth/actions'
import * as diaryPropActions from '../store/diaryProp/actions'
import * as diaryActions from '../store/diary/actions'
import {useMemo} from "react";
import {bindActionCreators} from "redux";
export const useActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(
        {...userActions}, dispatch), [dispatch]
    )
}