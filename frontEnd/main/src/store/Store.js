import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './apps/notes/NotesSlice';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/ticket/TicketSlice';

import userLoginReducer from './authSlice';
import { packageManageReducer, acceptPackageReducer,acceptTopupReducer,topupManageReducer,rejectPackageReducer,rejectTopupReducer} from './packageSlice';
import { userManageReducer,userListManageReducer,AcceptUserManageReducer,userTreeListManageReducer } from './userSlice';
import splitRoiReducer  from './roiSlice';



export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,

    userLoginReducer,
    packageManageReducer,
    userManageReducer,
    acceptPackageReducer,
    rejectPackageReducer,
    userListManageReducer,
    splitRoiReducer,
    AcceptUserManageReducer,
    userTreeListManageReducer,
    acceptTopupReducer,
    rejectTopupReducer,
    topupManageReducer
    
  },
});

export default store;
