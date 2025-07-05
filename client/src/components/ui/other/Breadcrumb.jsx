import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, House, ChevronDown } from "lucide-react";
import { useState } from "react";

// This function converts URL-friendly strings to display-friendly strings
// e.g., "user-profile" becomes "User Profile"
const formatBreadcrumbLabel = (pathOrUrl) => {
  let path = "";

  try {
    path = new URL(pathOrUrl).pathname;
  } catch {
    path = pathOrUrl;
  }

  const lastSegment = decodeURIComponent(path.split("/").filter(Boolean).pop());

  return lastSegment
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function Breadcrumb({
  showHomeIcon = true,
  homeHref = "/",
  className = "",
  routeNameMap = {}, // Optional mapping of route paths to custom names
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate breadcrumb items from the current path
  const breadcrumbItems = pathnames.map((path, index) => {
    // Build the href for this breadcrumb item
    const href = "/" + pathnames.slice(0, index + 1).join("/");

    // Determine if this is the current (last) item
    const isCurrent = index === pathnames.length - 1;

    // Use custom name from routeNameMap if available, otherwise format the path
    const label = routeNameMap[path] || formatBreadcrumbLabel(path);

    return { label, href, isCurrent };
  });

  // For mobile, we'll show a truncated version with dropdown
  const getMobileBreadcrumb = () => {
    if (breadcrumbItems.length === 0) return null;
    
    const currentItem = breadcrumbItems[breadcrumbItems.length - 1];
    const previousItems = breadcrumbItems.slice(0, -1);

    return (
      <div className="md:hidden flex items-center">
        {showHomeIcon && (
          <div onClick={() => navigate(homeHref)} className="flex items-center cursor-pointer text-gray-500 hover:text-primary transition-colors">
            <House className="w-4 h-4 mr-1" />
            <span className="sr-only">Home</span>
          </div>
        )}
        
        {previousItems.length > 0 && (
          <>
            <ChevronRight className="mx-1 text-gray-500 w-4 h-4" />
            <div className="relative">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center text-gray-500 hover:text-primary"
                aria-expanded={mobileMenuOpen}
                aria-label="Show breadcrumb trail"
              >
                <span>...</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute left-0 bottom-full mb-2 bg-white shadow-lg rounded-md p-2 z-10 min-w-[120px]">
                  {previousItems.map((item, index) => (
                    <div 
                      key={index} 
                      onClick={() => {
                        navigate(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="cursor-pointer text-gray-600 hover:text-primary p-1 text-sm whitespace-nowrap"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ChevronRight className="mx-1 text-gray-500 w-4 h-4" />
          </>
        )}
        
        <span className="text-primary" aria-current="page">
          {currentItem.label}
        </span>
      </div>
    );
  };

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      {/* Desktop Breadcrumb */}
      <div className="hidden md:flex items-center gap-1">
        {showHomeIcon && (
          <div>
            <div 
              onClick={() => navigate(homeHref)} 
              className="flex items-center cursor-pointer text-gray-500 hover:text-primary transition-colors"
            >
              <House className="w-4 h-4 mr-1" />
              <span className="sr-only">Home</span>
            </div>
          </div>
        )}

        {showHomeIcon && breadcrumbItems.length > 0 && (
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-500 mx-1" />
          </div>
        )}

        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-500 mx-1" />}
            {item.isCurrent ? (
              <span className="text-primary" aria-current="page">
                {item.label}
              </span>
            ) : (
              <div 
                onClick={() => navigate(item.href)} 
                className="text-gray-500 cursor-pointer hover:text-primary transition-colors"
              >
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Breadcrumb */}
      {getMobileBreadcrumb()}
    </nav>
  );
}

export default Breadcrumb;