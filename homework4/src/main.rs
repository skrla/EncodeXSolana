use std::collections::HashMap;

fn main() {
    println!("Welcome world");
    fizz_buzz();
    let nums = vec![2, 7, 11, 15];
    println!("{:#?}", two_sum(nums, 9));
}

fn fizz_buzz() {
    let mut fizz_buzz = 0;
    for i in 1..301 {
        match (i % 3, i % 5) {
            (0, 0) => {
                println!("Fizz buzz");
                fizz_buzz += 1;
            }
            (0, _) => println!("Fizz"),
            (_, 0) => println!("Buzz"),
            (_, _) => continue,
        }
    }
    println!("Fizz buzz occurred {}", fizz_buzz)
}

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        let result = target - num;
        if let Some(&index) = map.get(&result) {
            return vec![index as i32, i as i32];
        }
        map.insert(num, i);
    }

    vec![]
}
