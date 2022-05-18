import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: 'var(--lato)'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    // height: '',
                    backgroundColor: 'var(--mid)',
                    color: 'var(--alt)',
                    margin: '1.5rem 0',
                    marginRight: '1rem',            
                    transition: '0.3s ease',
                    textTransform: 'capitalize',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: 'var(--mid)'
                    }
                },
                outlined: {
                    backgroundColor: 'var(--error)',
                    color: 'var(--light)',
                    transition: '0.3s ease',
                    textTransform: 'capitalize',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: 'var(--light)',
                        color: 'var(--error)',
                        borderColor: 'var(--error)'
                    }
                }
            }
        }
    },
    palette: {
        text: {
            primary: '#071B85',
            secondary: '#757575',
            alternate: '#000000',
            error: '#C00C00'
        }
    }
})