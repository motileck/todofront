import React from 'react';
import routes from './routes.json'
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import FormCreateDiaryProp from "../../components/forms/formCreateDiaryProp/FormDiaryProp";
import Diary from "../../pages/diary/Diary";
import FormCreateDiary from "../../components/forms/fromCreateDiary/FormDiary";
import DiaryPropView from "../../components/diaryComponents/diaryPropView/DiaryPropView";
import Profile from "../../pages/profile/Profile";
import Analysis from "../../pages/analysis/Analysis";
import Table from "../../components/analysisComponents/Table";

const RoutersMap =  {
    [routes.home]: <Home/>,
    [routes.login]: <Login/>,
    [routes.register]: <Registration/>,
    [routes.diary]: <Diary/>,
    [routes.diariesProp]: <DiaryPropView/>,
    [routes.createPropDiary]: <FormCreateDiaryProp/>,
    [routes.createDiary]: <FormCreateDiary/>,
    [routes.profile]: <Profile/>,
    [routes.analysis]: <Analysis/>,
    [routes.createTable]: <Table/>
    };

export default RoutersMap;