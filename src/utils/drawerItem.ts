import { DrawerItem, UserRole } from "@/type/common";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorageIcon from "@mui/icons-material/Storage";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { USER_ROLE } from "@/constant/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  //   const defaultMenus = [
  //     {
  //       title: "Profile",
  //       path: `${role}/profile`,
  //       icon: PersonIcon,
  //     },
  //     {
  //       title: "Change Password",
  //       path: `change-password`,
  //       icon: KeyIcon,
  //     },
  //   ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        },
        {
          title: "Products",
          path: `${role}/products`,
          icon: InventoryIcon,
        },
        {
          title: "Orders",
          path: `${role}/orders`,
          icon: ShoppingCartIcon,
        },
        {
          title: "Categories",
          path: `${role}/Categories`,
          icon: StorageIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Orders",
          path: `${role}/orders`,
          icon: ShoppingCartIcon,
        },
        {
          title: "Payment History",
          path: `${role}/appointment`,
          icon: ReceiptLongIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
