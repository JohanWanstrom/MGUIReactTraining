import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';

import {Link} from 'react-router';


export const mailFolderListItems = (
    <div>
        <Link to="/">
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Registrera"/>
            </ListItem>
        </Link>
        <Link to="/manualControl">
            <ListItem button>
                <ListItemIcon>
                    <FormatListBulleted />
                </ListItemIcon>
                <ListItemText primary="Manuell kontroll" />
            </ListItem>
        </Link>
    </div>
);