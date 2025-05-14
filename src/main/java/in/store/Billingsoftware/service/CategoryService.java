package in.store.Billingsoftware.service;

import in.store.Billingsoftware.io.CategoryRequest;
import in.store.Billingsoftware.io.CategoryResponse;

import java.util.List;

public interface CategoryService {

    CategoryResponse add(CategoryRequest request);

    List<CategoryResponse> read();
}
