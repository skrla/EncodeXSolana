pub fn fizz_if_foo(fizzish: &str) -> &str {
    if fizzish == "fizz" {
        return "foo";
    } 
    else if (fizzish == "fuzz") {
        return "bar";
    } else {
        return "baz";
    }
}

// No test changes needed!
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn foo_for_fizz() {
        assert_eq!(fizz_if_foo("fizz"), "foo")
    }

    #[test]
    fn bar_for_fuzz() {
        assert_eq!(fizz_if_foo("fuzz"), "bar")
    }

    #[test]
    fn default_to_baz() {
        assert_eq!(fizz_if_foo("literally anything"), "baz")
    }
}
