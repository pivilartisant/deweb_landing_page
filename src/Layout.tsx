interface LayoutProps {
    children: React.ReactNode;
}

// Rules for DeWeb layout 
// Background color and text color should change at each re-render 
// Font should always be Ibm Plex Mono except when used for logos 

// Nice to have 
// User can select a color scheme for the layout

// It must be responsive, so it should be implement with mobile first approach

// Design should be a service to the user experience 

// Finality of landing page is to 
    // 1) Explain DeWeb and different possibilites 
    // 2) Provide clear information & documentation 

export function Layout(props:LayoutProps){
    const {children} = props;
    return (
        <div
        style={{}}>
            {children}
        </div>
    )
}