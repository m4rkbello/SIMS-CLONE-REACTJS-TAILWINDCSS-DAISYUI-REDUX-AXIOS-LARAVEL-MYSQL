const withAuth = (WrappedComponent) => {
    function WithAuthComponent(props) {
      console.log(props.isAuthenticated);
      if (!props.isAuthenticated) {
        return <div>User is not authenticated!</div>;
      }
      return <WrappedComponent {...props} />;
    }
  
    // Add a display name for better debugging
    WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  
    return WithAuthComponent;
  };
  
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  
  export default withAuth;
  