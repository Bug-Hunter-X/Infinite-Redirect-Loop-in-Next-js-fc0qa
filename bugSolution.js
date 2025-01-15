```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if the current route is different from the target route before redirecting
    if (router.asPath !== '/') {
      router.push('/');
    }
  };

  return (
    <button onClick={handleClick}>Go to Home</button>
  );
}

export default MyComponent;
```