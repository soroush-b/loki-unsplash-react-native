import { all } from 'redux-saga/effects';
import QueList from 'src/containers/QueList/saga';
import StarPackages from 'src/containers/StarPackages/saga';
import Repositories from 'src/containers/Repositories/saga';
import Profile from 'src/containers/Profile/saga';
import Splash from 'src/containers/Splash/saga';
import Statistics from 'src/containers/Statistics/saga';

export default function* rootSaga() {
  yield all([
    QueList(),
    StarPackages(),
    Repositories(),
    Profile(),
    Splash(),
    Statistics(),
  ]);
}
