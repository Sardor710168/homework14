class Magic {
  replace(str, a, b) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str.slice(i, i + a.length) === a) {
        result += b;
        i += a.length - 1;
      } else {
        result += str[i];
      }
    }
    return result;
  }

  length(data) {
    if (typeof data === "string" || Array.isArray(data)) {
      return data.length;
    } else if (typeof data === "object" && data !== null) {
      return Object.keys(data).length;
    } else {
      return String(data).length;
    }
  }

  toUpperCase(str) {
    const obj = {
      a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G",
      h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N",
      o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U",
      v: "V", w: "W", x: "X", y: "Y", z: "Z"
    };

    let result = "";
    for (let ch of str) {
      result += obj[ch] ? obj[ch] : ch;
    }
    return result;
  }

  repeat(data, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(data);
    }
    return result.join(" ");
  }

  count(str) {
    let result = {};
    for (let ch of str) {
      if (ch !== " ") {
        result[ch] = (result[ch] || 0) + 1;
      }
    }
    return result;
  }
}

const magic = new Magic();

console.log(magic.replace("salom dunyo", "dunyo", "world"));
console.log(magic.length([1,2,3,4]));
console.log(magic.toUpperCase("salom dunyo"));
console.log(magic.repeat("salom", 3));
console.log(magic.count("hello world"));
