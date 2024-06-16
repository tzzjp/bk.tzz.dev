import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { navMenu } from "@/config";
export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          navMenu.links ? (
            <NavigationMenuItem>
              {
                navMenu.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={`${link.target} ? ${link.target} : _blank`}
                    className={navigationMenuTriggerStyle()}
                  >
                    {link.title}
                  </a>
                ))
              }
            </NavigationMenuItem>
          ) : null
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
