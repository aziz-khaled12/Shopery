import { Link, useLocation, useNavigate } from "react-router-dom"
import { ChevronRight, House } from "lucide-react";



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
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};



function Breadcrumb({
  showHomeIcon = true,
  homeHref = "/",
  className = "",
  routeNameMap = {}, // Optional mapping of route paths to custom names
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const pathnames = location.pathname.split("/").filter((x) => x)

  // Generate breadcrumb items from the current path
  const breadcrumbItems = pathnames.map((path, index) => {
    // Build the href for this breadcrumb item
    const href = "/" + pathnames.slice(0, index + 1).join("/")

    // Determine if this is the current (last) item
    const isCurrent = index === pathnames.length - 1

    // Use custom name from routeNameMap if available, otherwise format the path
    const label = routeNameMap[path] || formatBreadcrumbLabel(path)

    return { label, href, isCurrent }
  })

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <div className="flex items-center gap-2">
        {showHomeIcon && (
          <div>
            <div onClick={() => {navigate(homeHref)}} className="flex items-center cursor-pointer text-gray-500 hover:text-primary transition-colors">
              
              <House className="text-sm mr-2" />
              <span className="sr-only">Home</span>
            </div>
          </div>
        )}

        {showHomeIcon && breadcrumbItems.length > 0 && (
          <div className="flex items-center">
            <ChevronRight className="text-sm text-gray-500"  />
          </div>
        )}

        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="mr-2 text-sm text-gray-500" />}
            {item.isCurrent ? (
              <span className="text-primary" aria-current="page">
                {item.label}
              </span>
            ) : (
              <div onClick={() => {navigate(item.href)}} className="text-gray-500 cursor-pointer hover:text-primary transition-colors">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb

