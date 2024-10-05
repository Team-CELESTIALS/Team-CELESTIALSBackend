import { Router } from "express";
import { 
    signup, 
    login, 
    getUsers, 
    getUserDetails, 
    updateUser, 
    deleteUser,
    bulkCreateUsers,
    bulkUpdateUsers,
    bulkDeleteUsers 
} from "../controller/user.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getUsers); // Admin-protected
router.get("/:id", authenticateUser, getUserDetails); // User-protected
router.put("/:id", authenticateUser, updateUser); // User-protected
router.delete("/:id", authenticateUser, deleteUser); // Admin-protected

// Bulk operations
router.post("/bulk/create", authenticateUser, bulkCreateUsers); // Admin-protected
router.put("/bulk/update", authenticateUser, bulkUpdateUsers); // Admin-protected
router.delete("/bulk/delete", authenticateUser, bulkDeleteUsers); // Admin-protected

export default router;
