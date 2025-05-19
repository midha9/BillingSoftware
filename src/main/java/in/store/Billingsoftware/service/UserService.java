package in.store.Billingsoftware.service;

import in.store.Billingsoftware.io.UserRequest;
import in.store.Billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

     UserResponse createUser (UserRequest request);

     String getUserRole(String email);

     List<UserResponse> readUsers();

     void deleteUser(String id);
}
