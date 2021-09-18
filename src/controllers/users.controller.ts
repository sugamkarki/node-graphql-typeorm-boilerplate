// import { NextFunction, Request, Response } from 'express';
// import { CreateUserDto } from '@dtos/users.dto';
// import { User } from '@interfaces/users.interface';
// import userService from '@services/users.service';

// class UsersController {
//   public userService = new userService();

//   public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const findAllUsersData: User[] = await this.userService.findAllUser();

//       res.status(200).json({ data: 'All users fetched', message: 'findAll' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const findOneUserData: User = await this.userService.findUserById(userId);

//       res.status(200).json({ data: 'Get User BY Id', message: 'findOne' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userData: CreateUserDto = req.body;
//       const createUserData: User = await this.userService.createUser(userData);

//       res.status(201).json({ data: 'create User', message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const userData: CreateUserDto = req.body;
//       const updateUserData: User = await this.userService.updateUser(userId, userData);

//       res.status(200).json({ data: 'update user', message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const deleteUserData: User = await this.userService.deleteUser(userId);

//       res.status(200).json({ data: 'delete user', message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// export default UsersController;
