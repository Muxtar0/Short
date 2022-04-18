import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
export const videoPlayState = atom({
    key: 'videoPlayState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});