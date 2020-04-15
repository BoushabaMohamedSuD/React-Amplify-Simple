import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }),
);


interface Props {
    change: any,
    submit: any
}

export const ValidationTextFields = (props: Props) => {
    const classes = useStyles();

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onChange={props.change}>
            <div>
                <TextField id="standard-error"
                    placeholder="name"
                    name="username"
                />
                <TextField
                    id="standard-error-helper-text"
                    placeholder="password"
                    name="password"
                />
            </div>
            <div>
                <TextField
                    id="standard-error-helper-text"
                    placeholder="email"
                    name="email"
                />
            </div>
            <button
                onClick={props.submit}
                type="button"
            >submit</button>


        </form>
    );
}
