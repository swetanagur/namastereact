const ScrollToBottomComponent = () => {
    // Function to make the API call
    const makeAPICall = () => {
      // Replace this with your actual API call logic
      console.log('API call triggered');
    };
  
    // useEffect hook to add the scroll event listener
    useEffect(() => {
      const handleScroll = () => {
        // Calculate the scroll position
        const scrollPosition = window.scrollY;
        document.documentElement.scrollTop;
  
        // Check if the user has reached the bottom (you can adjust the threshold as needed)
        if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight - 100) {
          // Call the function to make the API call
          makeAPICall();
        }
      };
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures that the effect runs only once (on mount)
}