fn main() {
    let answer = current_favorite_course();
    println!("My course is {}", answer);
}

fn current_favorite_course() -> String {
    return "Solana".to_string();
}
