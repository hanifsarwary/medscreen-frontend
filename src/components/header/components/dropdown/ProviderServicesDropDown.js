import React from "react";

import {Button, ButtonGroup, Popper, Grow, Paper, ClickAwayListener} from "@material-ui/core";

import {SupplyOrderFormDialog} from "../formdialog/SupplyOrderFormDialog";

export function ProviderServicesDropDown() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <Button variant="text"
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle} /*onMouseEnter={handleToggle} onMouseLeave={handleToggle}*/>
                Provider Services
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal /*onMouseEnter={handleToggle} onMouseLeave={handleToggle}*/>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <ButtonGroup orientation="vertical" color="black" aria-label="vertical contained primary button group" variant="text">
                                    <Button href="https://medscreenlabs.labnexus.net/">Lab Order And Result</Button>
                                    <SupplyOrderFormDialog/>
                                </ButtonGroup>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
