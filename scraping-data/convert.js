
const data = require('./category.json')


const brandMap = new Map();

// Duyệt qua từng đối tượng trong mảng ban đầu
data.forEach((item) => {
  const category = item.category[0]; // Lấy giá trị category (giả sử chỉ có một phần tử trong mảng)
  const brand = item.brand;

  // Kiểm tra xem category đã tồn tại trong brandMap chưa
  if (brandMap.has(category)) {
    brandMap.get(category).push(brand); // Thêm brand vào mảng brands tương ứng với category
  } else {
    brandMap.set(category, [brand]); // Tạo một mảng mới chứa brand cho category
  }
});

// Chuyển đổi brandMap thành một mảng các đối tượng với category và brands
const result = Array.from(brandMap, ([category, brands]) => ({ category, brands }));

console.log(result);