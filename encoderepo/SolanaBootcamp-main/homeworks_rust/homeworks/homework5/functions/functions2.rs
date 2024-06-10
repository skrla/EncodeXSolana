fn main() {
    call_this(3);
}

fn call_this(num:i32) {
    for i in 0..num {
        println!("Loop! number {}", i + 1);
    }
}
