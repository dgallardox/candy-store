this=$(basename "$(pwd)")

function httpmeth(){
  echo "Getting the HTTP methods used to make a request to $2"
  if [[ "$2" == "graphql" ]]; then
    pattern="/graphql|/index.php?graphql"
  else
    pattern="$2"
  fi
  cat $nginx_log_path/$1.access.log | grep -E "$pattern" | cut -d'|' -f10 | awk '{print $1}' | sort | uniq -c
}

