let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last]; // Thay giá trị đầu tiên của mảng x = giá trị cuối cùng trong mảng.
    x[last] = b; // Thay giá trị cuối của mảng = b có giá trị bằng giá trị đầu tiên của mảng.
    first++;// tăng chỉ số của số đầu và cuối tương ứng để xét tiếp.
    last--;}
    document.write(x);