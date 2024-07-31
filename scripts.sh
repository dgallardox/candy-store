this=$(basename "$(pwd)")

httpmeth(){
  echo "Getting the HTTP methods used to make a request to $2"
  if [[ "$2" == "graphql" ]]; then
    pattern="(/index\.php\?graphql|/graphql)"
  else
    pattern="$2"
  fi
  cat "$nginx_log_path/$1.access.log.1" | grep -E "$pattern" | cut -d'|' -f10 | awk '{print $1}' | sort | uniq -c
}